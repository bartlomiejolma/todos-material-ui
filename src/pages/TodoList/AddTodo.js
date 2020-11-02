import { Button, Grid, TextField } from "@material-ui/core";

import { useForm } from "react-hook-form";

const AddTodo = ({ addTodo }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => addTodo(data);

  return (
    <div
      style={{
        width: 400,
        position: "absolute",
        backgroundColor: "white",
        border: "2px solid #000",
      }}
    >
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
    </div>
  );
};

export default AddTodo;
