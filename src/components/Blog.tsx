import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, ArrowRight, X, BookOpen } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/content';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-white border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Removals & Packing Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Expert Moving Advice & Checklists
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Handy tips, timelines, and expert advice from our senior UK move managers to make your transition effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6DAC4] shadow-xs hover:shadow-xl hover:border-[#8C9B80] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#E6DAC4] text-[#475841] text-[11px] font-bold font-poppins px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-[#666666]">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-[#5F7355]" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold font-poppins text-[#475841] group-hover:text-[#5F7355] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-[#5F7355]">
                <span className="group-hover:text-[#B29A70] transition-colors">Read Full Article</span>
                <ArrowRight className="w-4 h-4 text-[#5F7355] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Post Detail Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FAF8F4] max-w-2xl w-full rounded-2xl border border-[#E6DAC4] shadow-2xl overflow-hidden my-8 relative"
            >
              <div className="relative h-60">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#475841] via-[#475841]/50 to-transparent" />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-bold text-[#CDBA96] uppercase tracking-wider block">
                    {selectedPost.category} • {selectedPost.readTime}
                  </span>
                  <h3 className="text-2xl font-bold font-poppins">{selectedPost.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs text-[#666666] border-b border-[#E6DAC4] pb-3">
                  <User className="w-4 h-4 text-[#5F7355]" />
                  <span>By {selectedPost.author}</span>
                  <span>•</span>
                  <span>Published {selectedPost.date}</span>
                </div>

                <div className="space-y-3 text-sm text-[#2F2F2F] leading-relaxed">
                  {selectedPost.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#E6DAC4] flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2.5 bg-[#5F7355] text-white font-semibold font-poppins text-xs rounded-xl hover:bg-[#475841] transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
