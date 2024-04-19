import ButtonGroup from 'react-bootstrap/ButtonGroup'; // Importa ButtonGroup
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Catalogo.css'



export const Catalogo = () => {
  return (
    
    <ButtonGroup className='Botones'> 
      <DropdownButton className="Producto Aro" title="Aros" id="bg-nested-dropdown">
        <Dropdown.Item>Acero</Dropdown.Item>
        <Dropdown.Item>Oro</Dropdown.Item>
        <Dropdown.Item>Plata</Dropdown.Item>
      </DropdownButton>
      <DropdownButton className="Producto Cadena/dije" title="Cadenas/Dijes" id="bg-nested-dropdown">
        <Dropdown.Item>Acero</Dropdown.Item>
        <Dropdown.Item>Oro</Dropdown.Item>
        <Dropdown.Item>Plata</Dropdown.Item>
      </DropdownButton>
      <DropdownButton className="Producto Anillo" title="Anillos" id="bg-nested-dropdown">
        <Dropdown.Item>Acero</Dropdown.Item>
        <Dropdown.Item>Oro</Dropdown.Item>
        <Dropdown.Item>Plata</Dropdown.Item>
      </DropdownButton>
      <DropdownButton className="Producto Reloj" title="Relojes" id="bg-nested-dropdown">
        <Dropdown.Item>Acero</Dropdown.Item>
        <Dropdown.Item>Oro</Dropdown.Item>
        <Dropdown.Item>Plata</Dropdown.Item>
      </DropdownButton>
      <DropdownButton className="Producto Pulsera" title="Pulseras" id="bg-nested-dropdown">
        <Dropdown.Item>Acero</Dropdown.Item>
        <Dropdown.Item>Oro</Dropdown.Item>
        <Dropdown.Item>Plata</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup> /* Cierra el ButtonGroup */
  );
};