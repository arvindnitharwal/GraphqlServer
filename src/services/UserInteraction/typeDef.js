const userBasetypeDef = `
type Mutation {
    insertProfileDetails(request : ProfileDetails) : Boolean
    updareProfileDetails(request : ProfileDetails) : Boolean
},
type ProfileDetails {
    name : String
    email : String
    school : String
    profileImg : String
}`;
export default userBasetypeDef;