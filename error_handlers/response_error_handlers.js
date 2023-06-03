let errorParser = (res, message, errorCode, errorStatus, data, other) => {


    try {
        return res.status(errorCode ?? 200).send({
            error: errorStatus ?? true,
            errorCode: errorCode ?? 200,
            message: message ?? "Invalid body parameter(s)",
            data: data,
            other
        });
    } catch (e) {
        console.log(e);
    }
}

export default {response: errorParser}