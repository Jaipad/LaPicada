import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from "@chakra-ui/react";

const Filtros = () => {
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
          <AccordionPanel pb={4}>"Aqui van los tipos de comida"</AccordionPanel>
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
                Sodexo
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Checkbox defaultChecked iconColor="rgb(0,255,0)">
              Acepta
            </Checkbox>
          </AccordionPanel>
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
