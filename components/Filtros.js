import { Box, Stack } from "@chakra-ui/layout";
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
  const [comidas, setComidas] = useState([
    { id: 1, nombre: "Hamburguesa", checked: false },
    { id: 2, nombre: "Completos", checked: false },
    { id: 3, nombre: "Sushi", checked: false },
    { id: 4, nombre: "Italian Food", checked: false },
  ]);

  const [pagos, setPagos] = useState([
    { id: 5, nombre: "Efectivo", checked: false },
    { id: 6, nombre: "Débito", checked: false },
    { id: 7, nombre: "Crédito", checked: false },
    { id: 8, nombre: "Sodexo", checked: false },
  ]);

  const seleccionDeComidas = (event, item) => {
    const { checked } = event.target;
    setComidas((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, checked } : prevItem
      )
    );
  };

  const seleccionDePagos = (event, item) => {
    const { checked } = event.target;
    setPagos((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, checked } : prevItem
      )
    );
  };

  return (
    <div>
      <Accordion allowToggle style={{ position: "relative", width: "120px" }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Tipos de Comida
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={3}>
              {comidas.map((item) => (
                <Checkbox
                  key={item.id}
                  isChecked={item.checked}
                  onChange={(event) => seleccionDeComidas(event, item)}
                >
                  {item.nombre}
                </Checkbox>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle style={{ position: "absolute", width: "120px", left: "200px", top: "70px" }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Tipos de Pago
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={3}>
              {pagos.map((item) => (
                <Checkbox
                  key={item.id}
                  isChecked={item.checked}
                  onChange={(event) => seleccionDePagos(event, item)}
                >
                  {item.nombre}
                </Checkbox>
              ))}
            </Stack>
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
