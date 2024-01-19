import { Snackbar } from "@mui/base";
import {
  Button,
  Dropdown,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  Toast,
  Avatar,
  ContentCard,
  Badge,
  Modal,
  Textarea,
  Switch,
  Thumbnail,
} from "./lib";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main>
      <div
        className='d-flex align-items-center justify-content-start gap-2 mb-4'
        style={{ marginTop: "5rem" }}
      >
        <Button onClick={() => setOpenModal(true)}>Primary default</Button>
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
        className='mb-4'
        onOpenMenu={() => {}}
        title='My title'
      />
      <ContentCard
        description="This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out! This is a description that's a little bit longer than the other one. Check it out!"
        image='https://picsum.photos/200/300'
        className='mb-4'
        onOpenMenu={() => {}}
        title='My title'
        meta='Selected'
      />
      <Snackbar
        autoHideDuration={5000}
        open={true}
        onClose={() => {}}
        exited={false}
      >
        <Toast title='toast with title'>Toast with description </Toast>
      </Snackbar>
      <Badge badgeContent='100'>
        <Avatar image='https://picsum.photos/200/300' />
      </Badge>
      <Modal
        open={openModal}
        title='My modal'
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <>this is a modal</>
      </Modal>

      <Textarea placeholder='My placeholder' bordered />
      <Switch />
    </main>
  );
}

export default App;
