import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'custom': {'min': '940px', 'max': '1051px'},
      },
   
   },
   plugins: [],
 });
 