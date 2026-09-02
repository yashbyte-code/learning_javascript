const questions = [
  { question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup Management System", "Database Monitoring System", "Data Management Service"], answer: "Database Management System" },
  { question: "Which of the following is a DBMS?", options: ["MySQL", "HTML", "CSS", "JavaScript"], answer: "MySQL" },
  { question: "Which key uniquely identifies a record in a table?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key"], answer: "Primary Key" },
  { question: "Which key establishes a relationship between two tables?", options: ["Primary Key", "Foreign Key", "Super Key", "Alternate Key"], answer: "Foreign Key" },
  { question: "Which SQL command is used to retrieve data?", options: ["GET", "SELECT", "FETCH", "READ"], answer: "SELECT" },
  { question: "Which SQL command is used to remove a table?", options: ["DELETE", "DROP", "REMOVE", "CLEAR"], answer: "DROP" },
  { question: "Which SQL command removes all rows but keeps the table?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], answer: "TRUNCATE" },
  { question: "Which SQL clause is used to filter rows?", options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"], answer: "WHERE" },
  { question: "Which SQL clause is used to sort results?", options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"], answer: "ORDER BY" },
  { question: "Which SQL clause groups rows with the same values?", options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"], answer: "GROUP BY" },
  { question: "Which clause filters grouped records?", options: ["WHERE", "HAVING", "GROUP BY", "FILTER"], answer: "HAVING" },
  { question: "Which normal form removes repeating groups?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "1NF" },
  { question: "Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "2NF" },
  { question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "4NF"], answer: "3NF" },
  { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Structured Question Language"], answer: "Structured Query Language" },
  { question: "Which command is used to add a new column?", options: ["UPDATE", "ALTER", "MODIFY", "INSERT"], answer: "ALTER" },
  { question: "Which command is used to modify existing records?", options: ["CHANGE", "UPDATE", "ALTER", "MODIFY"], answer: "UPDATE" },
  { question: "Which command inserts new records into a table?", options: ["ADD", "INSERT", "CREATE", "PUT"], answer: "INSERT" },
  { question: "Which aggregate function returns the number of rows?", options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"], answer: "COUNT()" },
  { question: "Which aggregate function returns the average value?", options: ["AVG()", "MEAN()", "AVERAGE()", "MID()"], answer: "AVG()" },
  { question: "Which JOIN returns matching records from both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], answer: "INNER JOIN" },
  { question: "Which JOIN returns all records from the left table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"], answer: "LEFT JOIN" },
  { question: "What is a collection of related tables called?", options: ["Database", "Record", "Tuple", "Schema"], answer: "Database" },
  { question: "What is a row in a relational table called?", options: ["Attribute", "Tuple", "Domain", "Field"], answer: "Tuple" },
  { question: "What is a column in a relational table called?", options: ["Tuple", "Record", "Attribute", "Relation"], answer: "Attribute" },

  { question: "What does OS stand for?", options: ["Operating System", "Operating Software", "Open System", "Operating Service"], answer: "Operating System" },
  { question: "Which of these is an operating system?", options: ["Linux", "MySQL", "Oracle", "Chrome"], answer: "Linux" },
  { question: "Which component manages processes in an OS?", options: ["Compiler", "Kernel", "Browser", "Editor"], answer: "Kernel" },
  { question: "What is a process?", options: ["A program in execution", "A file", "A compiler", "A device"], answer: "A program in execution" },
  { question: "What is a thread?", options: ["A lightweight process", "A hardware device", "A file", "A program only"], answer: "A lightweight process" },
  { question: "Which scheduling algorithm uses a time quantum?", options: ["FCFS", "Round Robin", "SJF", "Priority"], answer: "Round Robin" },
  { question: "Which scheduling algorithm executes the shortest job first?", options: ["FCFS", "SJF", "Round Robin", "FIFO"], answer: "SJF" },
  { question: "Which scheduling algorithm executes processes in arrival order?", options: ["FCFS", "SJF", "Priority", "Round Robin"], answer: "FCFS" },
  { question: "What does FCFS stand for?", options: ["First Come First Serve", "First Call First Serve", "First Come First System", "Fast Come Fast Serve"], answer: "First Come First Serve" },
  { question: "What is a deadlock?", options: ["Processes waiting indefinitely", "A crashed computer", "A memory error", "A scheduling algorithm"], answer: "Processes waiting indefinitely" },
  { question: "Which is NOT a condition for deadlock?", options: ["Mutual Exclusion", "Hold and Wait", "Circular Wait", "Context Switching"], answer: "Context Switching" },
  { question: "What is virtual memory?", options: ["Memory extension using storage", "CPU memory", "Cache memory", "ROM"], answer: "Memory extension using storage" },
  { question: "Which memory is fastest?", options: ["Hard Disk", "RAM", "Cache", "SSD"], answer: "Cache" },
  { question: "What is paging?", options: ["Memory management technique", "CPU scheduling technique", "File system", "Network protocol"], answer: "Memory management technique" },
  { question: "What is a page fault?", options: ["Page not present in main memory", "CPU failure", "Disk failure", "Network failure"], answer: "Page not present in main memory" },
  { question: "Which algorithm is used for page replacement?", options: ["FIFO", "FCFS", "Round Robin", "DFS"], answer: "FIFO" },
  { question: "Which page replacement algorithm removes the least recently used page?", options: ["FIFO", "LRU", "Optimal", "FCFS"], answer: "LRU" },
  { question: "What is context switching?", options: ["Switching between processes", "Changing files", "Changing users", "Changing networks"], answer: "Switching between processes" },
  { question: "Which OS component handles hardware resources?", options: ["Kernel", "Application", "Browser", "Compiler"], answer: "Kernel" },
  { question: "What is multitasking?", options: ["Running multiple tasks seemingly simultaneously", "Running one task", "Multiple computers", "Multiple users only"], answer: "Running multiple tasks seemingly simultaneously" },
  { question: "Which is an example of open-source OS?", options: ["Linux", "Windows", "iOS", "MS-DOS"], answer: "Linux" },
  { question: "What is starvation in OS?", options: ["Process waits indefinitely for resources", "Process terminates", "Memory becomes full", "CPU stops"], answer: "Process waits indefinitely for resources" },
  { question: "What is a semaphore?", options: ["Synchronization mechanism", "Memory unit", "CPU register", "File system"], answer: "Synchronization mechanism" },
  { question: "What is IPC?", options: ["Inter Process Communication", "Internal Process Control", "Internet Process Communication", "Inter Program Control"], answer: "Inter Process Communication" },
  { question: "Which technique allows processes to communicate using shared memory?", options: ["IPC", "Paging", "Scheduling", "Spooling"], answer: "IPC" },

  { question: "What does LAN stand for?", options: ["Local Area Network", "Large Area Network", "Local Access Network", "Long Area Network"], answer: "Local Area Network" },
  { question: "What does WAN stand for?", options: ["Wide Area Network", "Wireless Area Network", "Web Area Network", "World Access Network"], answer: "Wide Area Network" },
  { question: "Which device connects different networks?", options: ["Switch", "Router", "Hub", "Repeater"], answer: "Router" },
  { question: "Which device connects devices within a LAN?", options: ["Router", "Switch", "Modem", "Gateway"], answer: "Switch" },
  { question: "Which device broadcasts data to all connected devices?", options: ["Switch", "Router", "Hub", "Gateway"], answer: "Hub" },
  { question: "What does IP stand for?", options: ["Internet Protocol", "Internet Program", "Internal Protocol", "Information Protocol"], answer: "Internet Protocol" },
  { question: "Which protocol is used to transfer web pages?", options: ["HTTP", "FTP", "SMTP", "SSH"], answer: "HTTP" },
  { question: "Which protocol is the secure version of HTTP?", options: ["HTTPS", "SFTP", "SSH", "SSL"], answer: "HTTPS" },
  { question: "Which protocol is used to send emails?", options: ["SMTP", "HTTP", "FTP", "DNS"], answer: "SMTP" },
  { question: "Which protocol is used to receive emails?", options: ["SMTP", "POP3", "HTTP", "FTP"], answer: "POP3" },
  { question: "Which protocol translates domain names to IP addresses?", options: ["DNS", "DHCP", "FTP", "HTTP"], answer: "DNS" },
  { question: "What does DNS stand for?", options: ["Domain Name System", "Data Name System", "Domain Network Service", "Digital Name Service"], answer: "Domain Name System" },
  { question: "Which protocol automatically assigns IP addresses?", options: ["DNS", "DHCP", "HTTP", "FTP"], answer: "DHCP" },
  { question: "What does MAC stand for in networking?", options: ["Media Access Control", "Machine Access Control", "Media Address Control", "Main Access Controller"], answer: "Media Access Control" },
  { question: "Which layer of OSI handles routing?", options: ["Physical", "Data Link", "Network", "Transport"], answer: "Network" },
  { question: "Which OSI layer is responsible for reliable delivery?", options: ["Network", "Transport", "Session", "Physical"], answer: "Transport" },
  { question: "How many layers are in the OSI model?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which OSI layer deals with MAC addresses?", options: ["Physical", "Data Link", "Network", "Transport"], answer: "Data Link" },
  { question: "Which layer is responsible for transmission of raw bits?", options: ["Physical", "Network", "Transport", "Session"], answer: "Physical" },
  { question: "Which protocol is connection-oriented?", options: ["UDP", "TCP", "IP", "ICMP"], answer: "TCP" },
  { question: "Which protocol is connectionless?", options: ["TCP", "UDP", "HTTP", "FTP"], answer: "UDP" },
  { question: "Which protocol is faster but less reliable?", options: ["TCP", "UDP", "HTTP", "FTP"], answer: "UDP" },
  { question: "What is the default port of HTTP?", options: ["21", "25", "80", "443"], answer: "80" },
  { question: "What is the default port of HTTPS?", options: ["80", "110", "443", "8080"], answer: "443" },
  { question: "Which topology connects all devices to a central device?", options: ["Bus", "Ring", "Star", "Mesh"], answer: "Star" },

  { question: "Which data structure follows LIFO?", options: ["Queue", "Stack", "Array", "Graph"], answer: "Stack" },
  { question: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], answer: "Queue" },
  { question: "Which data structure is used in BFS?", options: ["Stack", "Queue", "Heap", "Array"], answer: "Queue" },
  { question: "Which data structure is commonly used in DFS?", options: ["Queue", "Stack", "Heap", "Hash Table"], answer: "Stack" },
  { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(log n)" },
  { question: "What is the time complexity of linear search?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: "O(n)" },
  { question: "Which data structure stores elements in contiguous memory?", options: ["Linked List", "Array", "Graph", "Tree"], answer: "Array" },
  { question: "Which data structure uses nodes and pointers?", options: ["Array", "Linked List", "Stack only", "Matrix"], answer: "Linked List" },
  { question: "Which linked list has pointers in both directions?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Linear List"], answer: "Doubly Linked List" },
  { question: "Which linked list has the last node pointing to the first?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Linear List"], answer: "Circular Linked List" },
  { question: "Which sorting algorithm repeatedly swaps adjacent elements?", options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Heap Sort"], answer: "Bubble Sort" },
  { question: "Which sorting algorithm uses divide and conquer?", options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"], answer: "Merge Sort" },
  { question: "Which sorting algorithm generally has average O(n log n) complexity?", options: ["Bubble Sort", "Quick Sort", "Linear Search", "Selection Sort"], answer: "Quick Sort" },
  { question: "Which sorting algorithm selects the minimum element repeatedly?", options: ["Selection Sort", "Merge Sort", "Quick Sort", "Heap Sort"], answer: "Selection Sort" },
  { question: "Which sorting algorithm builds the sorted array one element at a time?", options: ["Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"], answer: "Insertion Sort" },
  { question: "Which data structure is hierarchical?", options: ["Array", "Tree", "Queue", "Stack"], answer: "Tree" },
  { question: "Which tree has at most two children per node?", options: ["Binary Tree", "B-Tree", "AVL Tree", "Trie"], answer: "Binary Tree" },
  { question: "Which traversal visits Root, Left, Right?", options: ["Inorder", "Preorder", "Postorder", "Level Order"], answer: "Preorder" },
  { question: "Which traversal visits Left, Root, Right?", options: ["Preorder", "Inorder", "Postorder", "Level Order"], answer: "Inorder" },
  { question: "Which traversal visits Left, Right, Root?", options: ["Preorder", "Inorder", "Postorder", "Level Order"], answer: "Postorder" },
  { question: "Which traversal uses a queue?", options: ["Preorder", "Inorder", "Postorder", "Level Order"], answer: "Level Order" },
  { question: "In a Binary Search Tree, which side contains smaller values?", options: ["Right", "Left", "Both", "Neither"], answer: "Left" },
  { question: "What is the average search complexity in a balanced BST?", options: ["O(n²)", "O(n)", "O(log n)", "O(1)"], answer: "O(log n)" },
  { question: "Which data structure is commonly used to implement a priority queue?", options: ["Heap", "Stack", "Linked List", "Graph"], answer: "Heap" },
  { question: "Which data structure stores key-value pairs with fast average lookup?", options: ["Stack", "Hash Table", "Queue", "Tree"], answer: "Hash Table" }
];

function getquestion(){
    const data = new Set(); //we use set here to get unique element

    while(data.size != 5){
        const index = Math.floor(Math.random()*questions.length);
        data.add(questions[index]);
    }


    return [...data]; //we convert set into array using spread operator 
}

const form = document.querySelector('form');

// creating answer object , first it is empty 
    const org_answers =  {};

const problem = getquestion();
problem.forEach((obj, index)=>{  // obj = question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup Management System", "Database Monitoring System", "Data Management Service"], answer: "Database Management System" },
    // select the form and insert all elements in it

    const div = document.createElement('div');
    div.className = 'question';

    
    org_answers[`q${index + 1}`] = obj.answer;

    const paragraph = document.createElement('p');
    paragraph.textContent = `${index + 1}. ${obj.question}`;

    div.appendChild(paragraph);

    //creating 4 options 
    obj.options.forEach((opt)=>{
       const label =  document.createElement('label');
       const input = document.createElement('input');
       input.type = "radio";
       input.name = `q${index + 1}`;
       input.value = opt; //humne yaha par value dedi hai input ki uski innerhtml nahi like <input value = 'sachine'> sachine tendulakar </input> so sirf value di hai sachine tendulakar nahi diya hai 

       // input ko label ko andhar insert kardiya 
       label.appendChild(input);

       //ab textnode create karte hai 
       const text_in_label = document.createTextNode(opt);


      //usko append kardo label ke sath
        label.appendChild(text_in_label);

        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    });

    form.appendChild(div);
});

//creating button 
const button = document.createElement('button')
button.type = 'submit';
button.className = "submit_button";
button.textContent = "Submit";

form.appendChild(button);

const paragraph2 = document.createElement('p');
paragraph2.id = "out";

form.appendChild(paragraph2);

// check the answers and tell the score 
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = new FormData(form);

    let result = 0;
    for(let[key, value] of data.entries())
    {
        if(value === org_answers[key])
            result++;
    }

    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct`;

    form.reset();
})

// all code is done and final project works very great and smoothly 😎😎😎