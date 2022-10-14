import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import db from '../../../lib/dbConnect';
import User from '../../../models/user';

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        await db.connect();

        const user = await User.findOne({
          email: credentials.email,
        });

        console.log(user);

        await db.disconnect();

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };
        }

        throw new Error('Invalid email or password');
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
