import { Button, Grid, TextField } from "@material-ui/core";
import styled from "styled-components";

import { useForm } from "react-hook-form";

const StyledModal = styled.div`
  width: 400px;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 2px solid ${({ theme }) => theme.palette.common.black};
  left: 50%;
  top: 30%;
  margin-left: -200px;
`;

const AddTodo = ({ todo, addTodo, done }) => {
  const { register, handleSubmit } = useForm({ defaultValues: todo });
  const onSubmit = (data) => {
    addTodo({...todo, ...data});
    done();
  };

  return (
    <StyledModal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column">
          <TextField inputRef={register} name="title" label="Title" />
          <TextField
            inputRef={register}
            name="description"
            label="Description"
          />
          <TextField
            inputRef={register}
            name="date"
            label="Due Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            inputRef={register}
            name="image"
            label="Images"
            type="file"
            accept="image/png, image/jpeg"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button type="submit">Save</Button>
        </Grid>
      </form>
    </StyledModal>
  );
};

export default AddTodo;
