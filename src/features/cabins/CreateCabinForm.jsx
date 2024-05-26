import { useForm } from "react-hook-form";

// import { useCreateCabin } from "features/cabins/useCreateCabin";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
// import { useEditCabin } from "./useEditCabin";
import { Textarea } from "../../ui/Textarea";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;

// Receives closeModal directly from Modal
function CreateCabinForm({ cabinToEdit, closeModal }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Cabin Name</Label>
        <Input type="number" id="cabinName" {...register("cabinName")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="name">Cabin Capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="price">Cabin Price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Cabin Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">About Cabin</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">image</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button type="reset">Cancel</Button>
        <Button type="submit">Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
