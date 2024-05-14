import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 
export default function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)} className="opacity-60 white fw-600 fs-m2 mb-5">Качественный сервис</AccordionHeader>
        <AccordionBody className="indigo-lightest opacity-40 fw-100 fs-m1 mb-1">
          В PulseTech мы стремимся обеспечить лучшее обслуживание клиентов в индустрии сборки персональных компьютеров. 
          Помимо того, что мы знаем все, что касается сборки ПК, мы также гарантируем лучшие впечатления от вашего использования готовых сборок.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)} className="opacity-60 white fw-600 fs-m2 mb-5">Клиентоориентированный подход</AccordionHeader>
        <AccordionBody className="indigo-lightest opacity-40 fw-100 fs-m1 mb-1">
          Мы лично учитываем все ваши уникальные потребности и вопросы, чтобы вы могли сэкономить время и получить 100% актуальные цены,
          наличие комплектующих и рекомендации от ведущих экспертов по сборке ПК.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)} className="opacity-60 white fw-600 fs-m2 mb-5">Первоклассные компоненты</AccordionHeader>
        <AccordionBody className="indigo-lightest opacity-40 fw-100 fs-m1 mb-1">
          Наш ассортимент готовых сборок состоит из высококачественных компонентов, тщательно отобранных, чтобы превзойти ожидания наших самых требовательных клиентов. 
          Наши сборки выходят за рамки стандартных конфигураций: мощные, стильные и надежные, с современным дизайном и передовыми технологиями.
        </AccordionBody>
      </Accordion>
    </>
  );
}
