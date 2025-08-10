// import { Post } from "@/types/PostValidation";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface PostsState {
//   data: Post[];
// }

// const initialState: PostsState = {
//   data: [],
// };

// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     loadPosts: (state, action: PayloadAction<Post[]>) => {
//       state.data = action.payload;
//     },
//     addPost: (state, action: PayloadAction<Post>) => {
//       state.data.unshift(action.payload);
//     },
//     updatePost: (state, action: PayloadAction<Post>) => {
//       const index = state.data.findIndex((p) => p.id === action.payload.id);
//       if (index !== -1) {
//         state.data[index] = action.payload;
//       }
//     },
//     deletePost: (state, action: PayloadAction<number>) => {
//       state.data = state.data.filter((p) => p.id !== action.payload);
//     },
//   },
// });


// export const { loadPosts, addPost, updatePost, deletePost } = postsSlice.actions;
// export default postsSlice.reducer;
