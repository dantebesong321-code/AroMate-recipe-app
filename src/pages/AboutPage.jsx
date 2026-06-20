import aboutPageImg from "../assets/home-pg-sub-2.jpg";

function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Hero Header Image */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={aboutPageImg}
          alt="AroMate culinary layout"
        />
        {/* Subtle overlay to give the image depth */}
        <div className="absolute rounded-2xl inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          {/* Header section with brand-aligned typography */}
          <div className="border-b border-slate-100 pb-6 mb-6">
            <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
              Our Vision
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-1">
              About AroMate
            </h1>
          </div>

          {/* Main Prose Text */}
          <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
            <p>
              AroMate is a modern recipe web application designed to bring
              order, creativity, and flavor back into your kitchen. Whether you
              are an aspiring home chef or looking to archive passed-down family
              traditions, AroMate provides a seamless environment to discover,
              create, manage, and bookmark delicious recipes all in one central
              workspace.
            </p>{" "}
            <br />
            <p>
              Built with a clean, intuitive visual hierarchy and optimized for
              speed, we believe that cooking inspiration should be entirely
              interactive and friction-free. Organize your meals, explore new
              culinary bounds, and design your digital cookbook with absolute
              ease.
            </p>
          </div>

          {/* Value Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-100 text-center">
            <div className="p-3">
              <p className="text-xl font-bold text-slate-800">Discover</p>
              <p className="text-xs text-slate-400 mt-1">New Flavors</p>
            </div>
            <div className="p-3">
              <p className="text-xl font-bold text-slate-800">Create</p>
              <p className="text-xs text-slate-400 mt-1">Custom Steps</p>
            </div>
            <div className="p-3">
              <p className="text-xl font-bold text-slate-800">Manage</p>
              <p className="text-xs text-slate-400 mt-1">Smart Sorting</p>
            </div>
            <div className="p-3">
              <p className="text-xl font-bold text-slate-800">Bookmark</p>
              <p className="text-xs text-slate-400 mt-1">Save Favorites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
