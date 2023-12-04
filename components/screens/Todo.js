import { View, Text, StyleSheet, TextInput, Button, FlatList, SafeAreaView, Pressable } from "react-native"
import { useState } from "react"
import { padding } from "../../services/utils/cssUtils"

function TodoItem (props) {
    const { todo, onDeleteTodo } = props

    return (
        <View style={styles.todoItem}>
            <Pressable onPress={() => onDeleteTodo(todo.id)}>
                <Text style={styles.todoItemTxt}>{todo.text}</Text>
            </Pressable>
        </View>
    )
}

export default function TodosScreen() {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const onChangeTodo = newTodo => {
        setTodo(newTodo)
    }

    const addTodo = () => {
        if(!todo.trim()) return
        setTodoList(l => [
            {
                id: Math.random().toString(),
                text: todo
            }, 
            ...l
        ])
        setTodo('')
    }

    const onDeleteTodo = id => {
        setTodoList(l => l.filter(t => t.id !== id))
    }

    return (
        <View style={styles.root}>
            
            <View style={styles.todoInputContainer}>
                <TextInput 
                    style={styles.todoInputTxt} 
                    placeholder="Type your Todo" 
                    value={todo}
                    onChangeText={onChangeTodo}
                />
                <Button title="ADD" onPress={addTodo} />
            </View>

            <Text style={{marginTop: 30, fontSize: 16, fontWeight: "bold" }}>
                TO-DO Item(s) (Press any item to Delete it)
            </Text>

            <SafeAreaView style={styles.todoListContainer}>
                { todoList.length === 0 && <Text>Hurray!!! You have nothing to-do :)</Text> }
                <FlatList 
                    data={todoList} 
                    keyExtractor={item => item.id}
                    renderItem={ itemData => <TodoItem todo={itemData.item} onDeleteTodo={onDeleteTodo} /> }
                />
                
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: '#4dd0e1',
        flex: 1,
        ...padding(60, 15, 10)
    },
    todoInputContainer: {
        flexDirection: 'row'
    },
    todoListContainer: {
        paddingTop: 20,
        flex: 1
    },
    todoInputTxt: {
        flex: 1,
        borderBottomColor: '#00C',
        borderBottomWidth: 1
    },
    todoItem: {
        marginTop: 7
    },
    todoItemTxt: {
        backgroundColor: '#eeff41',
        ...padding(10, 15)
    }
})