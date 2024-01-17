import { Button, Dropdown, Input, Menu, MenuButton, MenuItem } from "./lib";

function App() {
  return (
    <main>
      <div
        className='d-flex align-items-center justify-content-start gap-2 mb-4'
        style={{ marginTop: "5rem" }}
      >
        <Button>Primary default</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success loading</Button>
        <Button danger>Danger disabled</Button>
      </div>
      <div className='d-flex align-items-center justify-content-start gap-2 mb-4'>
        <Input placeholder='My place holder' />
        <Input placeholder='Danger here' danger />
      </div>
      <div className='d-flex align-items-center justify-content-start gap-2 mb-4'>
        <Dropdown>
          <MenuButton>Menu Trigger</MenuButton>
          <Menu>
            <MenuItem icon='sparkles'>Option one</MenuItem>
            <MenuItem icon='sparkles'>Option two</MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </main>
  );
}

export default App;
