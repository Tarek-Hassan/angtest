export interface JwtResponse {
    user:{
        first_name:string,
        last_name:string,
        mobile:string,
        profile:string,
        national_id:string,
        role:string,
        email:string,
        password:string,
        password_confirmation:string,
        access_token: string,
        expires_in: number
    }
}
