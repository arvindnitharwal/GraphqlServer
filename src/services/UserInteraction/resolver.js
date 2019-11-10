import apiCalls from './apiCalls';
const api = new apiCalls();
const userBaseResolvers = {
    Mutation: {
    insertProfileDetails: async (root, args, context, info) => {
        await api.insertProfileDetails(args.request);
    },
    updareProfileDetails: async (root, args, context, info) => {
        await api.updareProfileDetails(args.request)
    }
}
}
export default userBaseResolvers;