import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";
import { faker } from "@faker-js/faker";

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const desc = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <FormContainer action={createProductAction}>
        <div className="grid gap-4 md:grid-cols-2 my-4">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
          />
          <FormInput
            type="text"
            name="company"
            label="company name"
            defaultValue={company}
          />
          <PriceInput />
          <ImageInput />
        </div>
        <TextAreaInput
          name="description"
          labelText="product description"
          defaultValue={desc}
        />
        <div className="mt-6">
          <CheckboxInput name="featured" label="featured" />
        </div>
        <SubmitButton text="Create product" className="mt-8" />
      </FormContainer>
    </section>
  );
}
