import toast from 'react-hot-toast';

const toastOptions = {
    position: 'top-right',
    style: {
        border: '2px solid red',
    },
};

export const notify = (state, message) => {
    if (!['success', 'error', 'loading'].includes(state)) {
        console.error('Invalid toast state');
        return;
    }
    toast[state](message, {...toastOptions});
};