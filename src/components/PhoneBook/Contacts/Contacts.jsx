import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  contactsOperations,
  contactsSelectors,
} from "../../../redux/phonebook";

import { AccountBox, Delete } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./Contact.module.css";
import "./Contacts.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contacts() {
  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  function filtration(value) {
    if (value === "") {
      return contacts;
    } else {
      return contacts.filter((contact) => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  // --- Snackbar  /
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // ----- react-beautiful-dnd /
  //const [characters, updateCharacters] = useState();

  //function handleOnDragEnd(result) {
  //  if (!result.destination) return;

  //  const items = Array.from(characters);
  //  const [reorderedItem] = items.splice(result.source.index, 1);
  //  items.splice(result.destination.index, 0, reorderedItem);

  //  updateCharacters(items);
  //}

  function handleOnDragEnd() {}

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <List
              sx={{ bgcolor: "background.paper" }}
              className={styles.list}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <TransitionGroup>
                {contacts &&
                  filtration(filter)?.map(({ id, name, number }, index) => (
                    <CSSTransition key={id} timeout={500} classNames="item">
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <ListItem
                            sx={{
                              borderColor: "primary.main",
                              border: 1,
                              borderRadius: 2,
                            }}
                            className={styles.Item}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "primary.dark" }}>
                                <AccountBox />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={name} secondary={number} />
                            <IconButton
                              type="button"
                              edge="end"
                              aria-label="delete"
                              sx={{ marginLeft: "40px" }}
                              onClick={() => {
                                onDeleteContact(id);
                                handleClick();
                              }}
                              id={id}
                            >
                              <Delete sx={{ color: "error.main" }} />
                            </IconButton>
                          </ListItem>
                        )}
                      </Draggable>
                    </CSSTransition>
                  ))}
              </TransitionGroup>

              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Contact deleted
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contacts;
