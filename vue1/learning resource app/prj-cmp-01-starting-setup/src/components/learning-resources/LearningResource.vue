<template>
    <div>
        <header>
            <h3>{{ title }}</h3>
            <button>Delete</button>
        </header>
    </div>
    <p>{{ description }}</p>
    <nav>
        <a href>View Resource</a>
    </nav>
</template>

<script>
export default {
    props:['title','description','title']
}
</script>