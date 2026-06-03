import { MdListAlt } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { MdFreeCancellation } from "react-icons/md";
import { MdChecklistRtl } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { MdSavedSearch } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import homePageImage from "../assets/homepage-img.jpg";
import homePgImage1 from "../assets/home-pg-sub-1.jpg";
import homePgImage2 from "../assets/home-pg-sub-2.jpg";
import homePgImage3 from "../assets/home-pg-sub-3.jpg";

function HomePage() {
  // Testimonial Data
  const testimonials = [
    {
      quote:
        "This app completely changed my weeknight routine. I went from ordering takeout to cooking healthy meals in under 30 minutes!",
      author: "Sarah M.",
      title: "Busy Working Mom",
    },
    {
      quote:
        "The smart grocery list feature alone is worth it. It saves me so much time and money at the supermarket.",
      author: "David K.",
      title: "Home Cook Enthusiast",
    },
    {
      quote:
        "I love how I can filter by my dietary restrictions without sacrificing flavor. Truly a lifesaver.",
      author: "Elena R.",
      title: "Fitness & Nutrition Coach",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="homepage-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text-content">
          <span className="badge">Culinary Inspiration Awaits</span>
          <h1>Fresh Ideas for Every Kitchen</h1>
          <p>
            Discover, plan, and cook delicious recipes designed for busy
            weekdays, special occasions, and everything in between. Elevate your
            daily meals effortlessly.
          </p>
          <div className="hero-cta-wrapper">
            <Link to="/dashboard">
              <button className="main-cta-btn">Start Cooking Free</button>
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={homePageImage}
            alt="Deliciously prepared meal on a kitchen table"
            className="responsive-hero-img"
          />
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Cooks Love Our App</h2>
          <p>
            Everything you need to turn mealtime chaos into culinary confidence.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <MdSavedSearch color={"green"} size={"50px"} />
            </div>
            <h3>Smart Search & Filters</h3>
            <p>
              Filter by ingredients you already have, dietary restrictions, or
              prep time to find the perfect meal instantly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MdCalendarToday color={"green"} size={"45px"} />
            </div>
            <h3>Intuitive Meal Planner</h3>
            <p>
              Map out your entire week in minutes. Drag, drop, and organize your
              breakfast, lunch, and dinner effortlessly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MdListAlt color={"green"} size={"50px"} />
            </div>
            <h3>Auto-Generated Grocery Lists</h3>
            <p>
              Your meal plan automatically generates a sorted shopping list,
              saving you time and reducing food waste.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MdFormatListNumbered color={"green"} size={"50px"} />
            </div>
            <h3>Step-by-Step Cooking Guide</h3>
            <p>
              Follow clear, voice-friendly instructions with built-in timers so
              you never burn a dish again.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY / ACCENT SECTION */}
      <section className="gallery-section">
        <div className="gallery-text">
          <h2>Simple Recipes. Great Food.</h2>
          <p>
            Make cooking easier with curated recipes designed for real life and
            real kitchens.
          </p>
        </div>
        <div className="img-showcase-container">
          <img
            src={homePgImage1}
            alt="Healthy breakfast bowl"
            className="gallery-img"
          />
          <img
            src={homePgImage2}
            alt="Freshly baked dinner entrée"
            className="gallery-img"
          />
          <img
            src={homePgImage3}
            alt="Vibrant side dish"
            className="gallery-img"
          />
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="testimonials-section">
        <h2>What Our Community Is Saying</h2>
        <div className="testimonial-slider-container">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className="testimonial-meta">
              <span className="testimonial-author">
                {testimonials[currentTestimonial].author}
              </span>
              <span className="testimonial-title">
                {testimonials[currentTestimonial].title}
              </span>
            </div>
          </div>
          <div className="slider-controls">
            <button
              onClick={prevTestimonial}
              className="slider-arrow-btn"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentTestimonial ? "active-dot" : ""}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="slider-arrow-btn"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="final-cta-section">
        <h2>Ready to transform your kitchen?</h2>
        <p>
          Join thousands of home cooks making mealtime simple and delicious
          every single day.
        </p>
        <Link to="/dashboard">
          <button className="secondary-cta-btn">Get Started Now</button>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
