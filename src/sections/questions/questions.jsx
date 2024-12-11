import React, { useState } from 'react';
import './questions.scss';

const AccordionItem = ({ index, item, isActive, onToggle }) => (
  <div className="accordion-item">
    <div className="accordion-wrapper">
      <div className={`accordion-number ${isActive ? 'open' : ''}`}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="accordion-inner">
        <div className="accordion-title" onClick={onToggle}>
          {item.title}
        </div>
        <div className={`accordion-content ${isActive ? 'open' : ''}`}>
          <p>{item.content}</p>
        </div>
      </div>
      <div className="accordion-toggle" onClick={onToggle}>
        {isActive ? '-' : '+'}
      </div>
    </div>
  </div>
);

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          item={item}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const Questions = () => {
  const items = [
    {
      title: 'Гомосексуальність лікується?',
      content: `Не можна вилікувати те, що не є хворобою. Ще 1990 року Всесвітня організація охорони здоров’я виключила гомосексуальність з Міжнародної статистичної класифікації хвороб. Спроби примусово змінити сексуальну орієнтацію — так звана репаративна терапія, — не досягають своєї мети, а натомість шкодять фізичному та психічному здоров'ю «пацієнтівпацієнток». У багатьох сучасних країнах дана терапія заборонена та криміналізована.`
    },
    {
      title: 'Що більше говоримо про гомосексуальність, то більше стає гомосексуальних людей?',
      content: 'Дослідження за різними методологіями свідчать про те, що в кожному суспільстві існує від 5 до 7% гомосексуальних людей. Часто вони не живуть відкрито через страх дискримінації та фізичного насилля, як, наприклад, у консервативних суспільствах. Через це створюється враження, що в якихось країнах більше геїв і лесбійок, а в деяких менше.'
    },
    {
      title: '«Гей-парад» пропагує гомосексуальність?',
      content: 'В Україні не проводяться гей-паради. Натомість проводяться гей-прайди (від англійської “pride” — гідність) чи Марші Рівності — публічні заходи на захист рівноправ’я та людської гідності ЛГБТК+ людей. Марші мають на меті привернути увагу суспільства до дискримінації та злочинів на ґрунті ненависті щодо ЛГБТК+ людей.'
    },
    {
      title: 'В Україні бути ЛГБТК+ людиною — цілком безпечно?',
      content: 'В Україні гомосексуальні люди страждають від насильства. З 2020 по 2024 роки центр «Наш Світ» зафіксував 291 злочин на ґрунті ненависті. З огляду на відсутність відповідного законодавства, відчуття безкарності злочинців, а також постійний страх неприйняття, постраждалі бояться звертатися до поліції чи повідомляти когось про скоєний злочин.'
    }
  ];

  return (
    <div  id='questions' className="questions-container">
      <div className="about-us__title-wrapper">
        <a href="/merch" className="about-us-title">
          Питання<span className="icon-arrow"></span>
        </a>
      </div>
      <div className="questions__grid">
        <h2 className="myths-title">
          <span className="w600">Міфи</span> <br /> про ЛГБТК+
        </h2>
        <Accordion items={items} />
      </div>

      <div className="questions__button-container">
        <button className="custom-button--about-us">
        про ПРАВА ЛГБТК+
          <span className="buttons-arrow"></span>
        </button>
      </div>
    </div>
  );
};

export default Questions;
