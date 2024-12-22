import React, { useState } from 'react';
import { commonAdhkar } from './data/adhkar';
import { Header } from './components/layout/Header';
import { Footer } from './components/Footer';
import { TimelineContainer } from './components/Timeline/TimelineContainer';
import { TimelineItem } from './components/Timeline/TimelineItem';
import { Basmala } from './components/Basmala';
import { useTheme } from './hooks/useTheme';
import { Category } from './types/dhikr';
import { BackgroundPattern } from './components/BackgroundPattern';
import pearl from './images/pearl.png';

export default function App() {
  const [category, setCategory] = useState<Category>('morning');
  const { isDark, theme } = useTheme(category);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${theme.background} relative overflow-hidden`}>
      <BackgroundPattern isDark={isDark} />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header 
          category={category}
          onToggle={setCategory}
          isDark={isDark}
        />

        <Basmala isDark={isDark} />
        <TimelineContainer isDark={isDark}>
          {commonAdhkar.map((dhikr, index) => {
            // هنا نقوم بالتحقق إذا كانت 'text' هي دالة لتحديد النص بناءً على الفئة
            const text = typeof dhikr.text === 'function' ? dhikr.text(category) : dhikr.text;

            return (
              <TimelineItem
                key={dhikr.id}
                text={text}
                count={dhikr.count}
                reference={dhikr.reference}
                benefit={dhikr.benefit}
                isDark={isDark}
                index={index}
              />
            );
          })}
        </TimelineContainer>

        {/* إضافة صورة اللؤلؤة بعد التايم لاين مع تخصيص z-index أعلى */}
        <div className="flex justify-center mt-12 relative z-20">
          <img 
            src={pearl}  // استخدام الصورة المستوردة بشكل صحيح
            alt="Pearl" 
            className="w-20 h-20" // يمكنك تعديل الحجم هنا حسب الحاجة
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
