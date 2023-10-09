import * as Swall from 'sweetalert2';

export const showSuccess = (message: string): void => {
  const Toast = Swall.default.mixin({
    position: 'top',
    showConfirmButton: true,
  });
  Toast.fire({
    icon: 'success',
    title: message,
  });
};
