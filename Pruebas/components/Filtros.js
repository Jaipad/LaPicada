import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from "@chakra-ui/react";

import { useState } from "react";

const Filtros = () => {
  const [comida, setComida] = useState([
    { nombre: "Hamburguesa", acepta: false },
    { nombre: "Completos", acepta: false },
    { nombre: "Sushi", acepta: false },
    { nombre: "Italian food", acpeta: false },
  ]);

  const [pago, setPago] = useState([
    { tipo: "Efectivo", acepta: false },
    { tipo: "Débito", acepta: false },
    { tipo: "Crédito", acepta: false },
    { tipo: "Sodexo", acepta: false },
  ]);

  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem
          style={{
            position: "absolute",
            height: "50px",
            width: "100px",
            top: "50px",
          }}
        >
          <h2>
            <AccordionButton>
              <Box as="span" textAlign="left">
                Tipos de comida
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {comida.map((item) => (
            <AccordionPanel pb={4}>{item.nombre}</AccordionPanel>
          ))}
        </AccordionItem>

        <AccordionItem
          style={{
            position: "absolute",
            height: "50px",
            width: "100px",
            left: "200px",
            top: "50px",
          }}
        >
          <h2>
            <AccordionButton>
              <Box as="span" textAlign="left">
                Tipo de pago
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {pago.map((item) => (
            <AccordionPanel pb={4}>
              <Checkbox defaultChecked iconColor="rgb(0,255,0)">
                {item.tipo}
              </Checkbox>
            </AccordionPanel>
          ))}
        </AccordionItem>

        <AccordionItem
          style={{
            position: "absolute",
            height: "50px",
            width: "100px",
            left: "400px",
            top: "50px",
          }}
        >
          <h2>
            <AccordionButton>
              <Box textAlign="left">Clasificacion</Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            "Aqui va las clasificaciones para filtrar"
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <h2
        style={{
          position: "absolute",
          left: "600px",
          top: "50px",
        }}
      >
        Horario:
      </h2>
    </div>
  );
};

export default Filtros;
