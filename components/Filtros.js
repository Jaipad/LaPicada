import { Box, Stack } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Input,
} from "@chakra-ui/react";

const Filtros = ({ comidas, setComidas, pagos, setPagos }) => {
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
    <div className="filtros">
      <Accordion allowToggle>
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

      <Accordion allowToggle>
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

      <div className="filtroHorario">
        <label>Horario:</label>
        <Input type="time" />
      </div>
    </div>
  );
};

export default Filtros;
