import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";

function App() {
  return (
    <div className="flex flex-col items-center justify-start space-y-4 bg-cyan w-full min-h-screen">
      <InputShortener/>
      <LinkResult/>
    </div>
  );
}

export default App;
