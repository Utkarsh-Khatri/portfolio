import React from 'react';

const blogPosts = [
  {
    title: "What I Learned from Building a Stroke Prediction Model",
    summary: "In this post, I discuss my experience building a stroke prediction model with machine learning and the challenges I faced.",
    date: "October 1, 2024",
    link: "https://www.analyticsvidhya.com/blog/2021/05/how-to-create-a-stroke-prediction-model/"
  },
  {
    title: "Why React Hooks Changed My Approach to State Management",
    summary: "A dive into React Hooks and how they revolutionized my approach to building React applications.",
    date: "September 20, 2024",
    link: "https://www.imensosoftware.com/blog/react-js-hooks-simplifying-state-management-in-your-applications/#:~:text=React%20Hooks%20provide%20a%20new,to%20write%20and%20maintain%20code."
  },
];

function Blog() {
  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-3xl mx-auto text-gray-200">
      <h1 className="text-5xl font-bold text-purple-500 text-center mb-6">Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-purple-400">{post.title}</h2>
            <p className="text-lg text-gray-300 mt-2">{post.summary}</p>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            <a
              href={post.link}
              className="block text-center bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 mt-4"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
