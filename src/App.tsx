import { Button, Dropdown, Input, Menu, MenuButton, MenuItem } from "./lib";
import { Thumbnail } from "./lib";
import { Avatar, ContentCard } from "./lib/dataDisplay";

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
      <div className='mb-4'>
        <Thumbnail src='https://picsum.photos/200/300' alt='My image' />
      </div>

      <div className='d-flex align-items-center justify-content-start gap-2 mb-4'>
        <Avatar image='https://picsum.photos/200/300' />
        <Avatar image='https://picsum.photos/200/300' label='with username' />
      </div>

      <ContentCard
        image='https://picsum.photos/200/300'
        onOpenMenu={() => {}}
        title='My title'
      />
      <ContentCard
        description="This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out!"
        image='https://picsum.photos/200/300'
        onOpenMenu={() => {}}
        title='My title'
        meta='Selected'
      />
    </main>
  );
}

export default App;
