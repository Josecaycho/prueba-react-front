import HttpClient from '../api/HttpClient';

export const dataUser = async idPost => {
	const resultado = HttpClient.get("users/" + idPost)
	return await Promise.all([resultado])
}
