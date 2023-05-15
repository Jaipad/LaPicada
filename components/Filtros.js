import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  CheckboxGroup,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { useState } from "react";

const Filtros = () => {
  const categorias = [
    {
      nombre: "Tipos de comida",
      productos: [
        { nombre: "Hamburguesa", value: false, id: 1 },
        { nombre: "Completos", value: false, id: 2 },
        { nombre: "Sushi", value: false, id: 3 },
        { nombre: "Italian food", value: false, id: 4 },
      ],
    },
    {
      nombre: "Tipos de Pago",
      productos: [
        { nombre: "Efectivo", value: false, id: 5 },
        { nombre: "Débito", value: false, id: 6 },
        { nombre: "Crédito", value: false, id: 7 },
        { nombre: "Sodexo", value: false, id: 8 },
      ],
    },
  ];

  return (
    <div>
      <Accordion allowMultiple >
        <HStack spacing={"100px"}>
          {categorias.map((categoria) => (
            <AccordionItem key={categoria.nombre}>
              <AccordionButton _expanded={true}>
                {categoria.nombre}
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <CheckboxGroup>
                  <VStack align="start">
                    {categoria.productos.map((producto) => (
                      <Checkbox key={producto.id} value={producto.value}>
                        {producto.nombre}
                      </Checkbox>
                    ))}
                  </VStack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </HStack>
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
