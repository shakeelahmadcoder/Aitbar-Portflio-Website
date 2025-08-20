import NextAuth from "next-auth";          // NextAuth import
import CredentialsProvider from "next-auth/providers/credentials"; // Credentials auth

export const authOptions = {
  providers: [ 
    CredentialsProvider({ name: "Credentials",                
      credentials: {
        email: { label: "Email", type: "text" },        // form field
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASS;

        if (credentials.email === adminEmail && credentials.password === adminPass) {
          return { id: "1", name: "Admin", email: adminEmail };
        }
        return null; 
      }
    })
  ],
  session: { strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,     
};

const handler = NextAuth(authOptions);     
export { handler as GET, handler as POST }; 
