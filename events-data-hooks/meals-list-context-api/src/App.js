import Counter from "./components/Counter";
import MealsList from "./components/MealsList";
import MealsProvider from "./providers/MealsProvider";


function App() {
  return (
    <div>
      <div>
        <MealsProvider>
          <MealsList />
          <Counter />
        </MealsProvider>
      </div>
    </div>
  );
}

export default App;
