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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

// Receives closeModal directly from Modal
function CreateCabinForm({ cabinToEdit, closeModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();

  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New Cabin sucessfuly created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin Name</Label>
        <Input
          type="number"
          id="name"
          {...register("name", {
            required: "This Fied  is required",
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="name">Cabin Capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This Fied  is required",
            min: {
              value: 1,
              message: "Capacity should be minimum 1",
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="price">Cabin Price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This Fied  is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Cabin Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regularprice",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">About Cabin</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This Fied  is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">image</Label>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This Fied  is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button type="reset">Cancel</Button>
        <Button disabled={isCreating} type="submit">
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
