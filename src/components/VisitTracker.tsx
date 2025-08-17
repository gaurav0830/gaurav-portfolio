// src/components/VisitTracker.tsx
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function VisitTracker() {
  useEffect(() => {
    const visits = JSON.parse(localStorage.getItem("visitData") || "{}");

    const now = new Date();
    const today = now.toISOString().split("T")[0]; // YYYY-MM-DD

    // Initialize if empty
    if (!visits.total) visits.total = 0;
    if (!visits.daily) visits.daily = {};
    if (!visits.weekly) visits.weekly = {};
    if (!visits.monthly) visits.monthly = {};

    // Increment counts
    visits.total += 1;
    visits.daily[today] = (visits.daily[today] || 0) + 1;

    const week = getWeekNumber(now);
    visits.weekly[week] = (visits.weekly[week] || 0) + 1;

    const month = now.getMonth() + 1; // 1-12
    visits.monthly[month] = (visits.monthly[month] || 0) + 1;

    localStorage.setItem("visitData", JSON.stringify(visits));

    // Send email on first visit or weekly/monthly threshold
    const lastSent = localStorage.getItem("lastEmailSent") || "";
    if (!lastSent) {
      sendEmail(visits, "New Visitor");
      localStorage.setItem("lastEmailSent", today);
    } else {
      // Check if new week or month
      const lastSentDate = new Date(lastSent);
      if (week !== getWeekNumber(lastSentDate)) {
        sendEmail(visits, "Weekly Summary");
        localStorage.setItem("lastEmailSent", today);
      } else if (month !== lastSentDate.getMonth() + 1) {
        sendEmail(visits, "Monthly Summary");
        localStorage.setItem("lastEmailSent", today);
      }
    }
  }, []);

  function getWeekNumber(d: Date) {
    const oneJan = new Date(d.getFullYear(), 0, 1);
    const numberOfDays = Math.floor(
      (d.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
    );
    return Math.ceil((d.getDay() + 1 + numberOfDays) / 7);
  }

  const sendEmail = async (visits: any, visitorType: string) => {
    try {
      await emailjs.send(
        "service_rj7sdwk",
        "template_q8nsdso",
        {
          visitorType,
          totalVisits: visits.total,
          weeklyVisits: visits.weekly[getWeekNumber(new Date())],
          monthlyVisits: visits.monthly[new Date().getMonth() + 1],
          page: window.location.href,
          browser: navigator.userAgent,
          date: new Date().toLocaleString(),
        },
        "uEaVScKQoflFYJoC8"
      );
      console.log("Email sent!");
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  return null;
}
