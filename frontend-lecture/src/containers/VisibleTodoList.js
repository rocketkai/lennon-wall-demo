import { connect } from "react-redux";
import { fetchTodos, toggleTodo, VisibilityFilters } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.filter);

  return {
    todos: getVisibleTodos(state.todos.todos, ownProps.filter)
    // todos: getVisibleTodos(state.todos.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
