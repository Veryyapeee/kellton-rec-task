import styled from 'styled-components/native';

import {Input} from '../../components/Atoms/Input';
import {Text} from '../../components/Atoms/Text';
import {BaseScreen} from '../../components/Organism/BaseScreen';
import {Form} from '../../components/Organism/Form/Form';
import {InputValidationRules} from '../../components/Organism/Form/types';
import {validEmail, validZipcode} from '../../utils/regExp';
import {ShippingFormScreenData} from './ShippingFormScreenData';
import {ShippingFormData} from './types';

const Container = styled(BaseScreen)`
  padding: 50px;
  justify-content: center;
`;

const validationSchema: Record<string, InputValidationRules> = {
  requiredRule: {
    required: 'This field is required',
  },
  email: {
    required: 'This field is required',
    pattern: {
      value: validEmail,
      message: 'Not an email',
    },
  },
  zipcode: {
    required: 'This field is required',
    pattern: {
      value: validZipcode,
      message: 'Invalid zipcode',
    },
  },
};

export const ShippingFormScreen = () => {
  return (
    <Container enableKeyboardAvoid enableKeyboardDismiss>
      <ShippingFormScreenData>
        {({onSubmit}) => (
          <>
            <Text size="xlg" fontWeight="bold">
              PERSONAL DETAILS
            </Text>
            <Form<ShippingFormData>
              onSubmit={onSubmit}
              submitButtonText="VIEW SUMMARY">
              <Input
                label="Full Name"
                name="fullname"
                rules={validationSchema.requiredRule}
              />
              <Input
                label="Email"
                name="email"
                rules={validationSchema.email}
              />
              <Input
                label="Address"
                name="address"
                rules={validationSchema.requiredRule}
              />
              <Input
                label="City"
                name="city"
                rules={validationSchema.requiredRule}
              />
              <Input
                label="State"
                name="state"
                rules={validationSchema.requiredRule}
              />
              <Input
                label="Zip Code"
                name="zipcode"
                keyboardType="numeric"
                rules={validationSchema.zipcode}
              />
            </Form>
          </>
        )}
      </ShippingFormScreenData>
    </Container>
  );
};
