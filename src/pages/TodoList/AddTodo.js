import { Button, CardMedia, Grid, TextField } from "@material-ui/core";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useState } from "react";

const StyledModal = styled.div`
  width: 400px;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 2px solid ${({ theme }) => theme.palette.common.black};
  left: 50%;
  top: 30%;
  margin-left: -200px;
`;

const Image = styled(CardMedia)`
  width: 50px;
  height: 50px;
`;

const AddTodo = ({ todo = {}, addTodo, done }) => {
  const { register, handleSubmit } = useForm({ defaultValues: todo });
  const onSubmit = (data) => {
    const { image, ...rest } = data;
    addTodo({ ...todo, ...rest, images: files });
    done();
  };

  const { images = [] } = todo;
  const [files, setFiles] = useState(images);

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
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ multiple: true, accept: "image/*" }}
            onChange={(e) => {
              setFiles([]);
              for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files.item(i);
                const reader = new FileReader();
                reader.onloadend = () => setFiles([...files, reader.result]);
                reader.readAsDataURL(file);
              }
            }}
          />
          <Grid container>
            {files.map((image) => (
              <Grid item>
                <Image image={image} />
              </Grid>
            ))}
          </Grid>

          <Button type="submit">Save</Button>
        </Grid>
      </form>
    </StyledModal>
  );
};

export default AddTodo;
