const delayedSuccess = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { 'message': 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

const delayedException = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            try {
                throw new Error('delayed exception!');
            } catch (e) {
                reject({ error: e.message });
            }
        }, 500);
    });
};

// Calling both promises separately and handling the results
const handlePromises = async () => {
    try {
        const successResult = await delayedSuccess();
        console.log(successResult);
    } catch (error) {
        console.error(error);
    }

    try {
        const exceptionResult = await delayedException();
        console.log(exceptionResult);
    } catch (error) {
        console.error(error);
    }
};

// Calling the function to handle promises
handlePromises();
