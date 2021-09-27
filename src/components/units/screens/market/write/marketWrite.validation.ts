import * as yup from 'yup';
export const schema = yup.object().shape({
  name: yup.string().required('* 필수항목 입니다'),
  price: yup
    .number()
    .typeError('* 숫자만 입력해주세요')
    .required('* 필수항목 입니다'),
  addressDetail: yup.string().required('* 필수항목 입니다'),
  contents: yup.string().required('* 필수항목 입니다'),
});
