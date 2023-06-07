const apiRequest = async(url = '', options = null, errMsg = null) => {
    try{
        const response = await fetch(url, options);
        if(!response.ok) throw new Error('Bad Request');
    }catch(err){
        errMsg = err;
    }finally {
        return errMsg;
    }
}

export default apiRequest;