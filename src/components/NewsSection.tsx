import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, Tag, X, FileText } from 'lucide-react';
import { NEWS_ITEMS } from '../data/mockData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  const categories = ['all', 'Transplant Milestone', 'Admissions', 'Hospital Notice', 'Research & CME'];

  const filteredNews =
    selectedCategory === 'all'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="news" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase">
              <Newspaper className="w-4 h-4 text-teal-700" />
              <span>Institutional Updates</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',serif]">
              News, Tenders & Academic Announcements
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Stay informed with groundbreaking surgical achievements, admissions, and public tenders.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Updates' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveNews(item)}
              className="group bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-teal-500/50 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2.5">
                  <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.date}</span>
                </div>
                <span className="font-bold text-teal-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                  Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Detail Modal */}
      {activeNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 relative">
            <button
              onClick={() => setActiveNews(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
              {activeNews.category}
            </span>

            <h3 className="mt-3 text-lg font-bold text-slate-900 font-['Playfair_Display',serif]">
              {activeNews.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 pb-3 border-b border-slate-100">
              <span>Date: {activeNews.date}</span>
              <span>•</span>
              <span>{activeNews.readTime}</span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeNews.summary}
            </p>

            <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200">
              For official press inquiries, media interviews, or tender bid submissions, contact the
              Directorate of Public Relations at{' '}
              <a href="mailto:media@gims.edu.pk" className="text-teal-700 font-semibold underline">
                media@gims.edu.pk
              </a>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveNews(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
