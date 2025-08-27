import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const VISIT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_VISIT_TEMPLATE_ID;

export default function VisitTracker() {
  useEffect(() => {
    console.log("👀 VisitTracker mounted");

    // Load visit data or initialize
    const data = JSON.parse(localStorage.getItem("visitData") || "{}");
    const now = new Date();
    const week = `${now.getFullYear()}-W${Math.ceil(now.getDate() / 7)}`;
    const month = `${now.getFullYear()}-${now.getMonth() + 1}`;

    // Update counts
    data.total = (data.total || 0) + 1;
    data.weekly = { ...(data.weekly || {}), [week]: (data.weekly?.[week] || 0) + 1 };
    data.monthly = { ...(data.monthly || {}), [month]: (data.monthly?.[month] || 0) + 1 };

    localStorage.setItem("visitData", JSON.stringify(data));
    console.log("📊 Updated visit data:", data);

    // Prepare details
    const page = window.location.pathname;
    const browser = navigator.userAgent;
    const date = now.toLocaleString();
    const visitorType = "Returning User"; // (could be improved with cookies/IP later)

    // Prevent duplicate send in same page-load
    if (sessionStorage.getItem("emailSent") === date) {
      console.log("⏭️ Skipping duplicate email (already sent this visit)");
      return;
    }
    sessionStorage.setItem("emailSent", date);

    // Send email
    console.log("📩 Sending visit email with data:", {
      visitorType,
      total: data.total,
      weekly: data.weekly[week],
      monthly: data.monthly[month],
      page,
      browser,
      date,
    });

    emailjs.send(
      SERVICE_ID,
      VISIT_TEMPLATE_ID,
      {
        visitorType,
        userTotalVisits: data.total,
        userWeeklyVisits: data.weekly[week],
        userMonthlyVisits: data.monthly[month],
        page,
        browser,
        date,
      },
      PUBLIC_KEY
    )
    .then(() => console.log("✅ Email sent successfully"))
    .catch((err) => console.error("❌ Email send error:", err));

  }, []);

  return null;
}
