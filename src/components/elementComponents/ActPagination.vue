<template>
    <div class="pagin">
        <ul class="pagination">
            <!-- <li class="page-item">
            <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
                First
            </button>
        </li> -->

            <li class="page-item">
                <a class="prev page-link" @click="onClickPreviousPage" :disabled="isInFirstPage"><img
                        src="@/assets/img/arrow1.svg" alt=""></a>
            </li>

            <!-- Visible Buttons Start -->

            <li v-for="page in pages" :key="page.name" :class="page.isDisabled ? 'page-item active' : 'page-item'">
                <a :class="page.isDisabled ? 'page-link current disabled' : 'page-link'" @click="onClickPage(page.name)"
                    :disabled="page.isDisabled">{{ page.name }}</a>
            </li>

            <!-- Visible Buttons End -->

            <li class="page-item">
                <a class="page-link" @click="onClickNextPage" :disabled="isInLastPage"><img
                        src="@/assets/img/arrow2.svg" alt=""></a>
            </li>

            <!-- <li>
            <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
                Last
            </button>
        </li> -->
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'MyPagination',
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        startPage() {
            // When on the first page
            if (this.currentPage === 1) {
                return 1;
            }

            // When on the last page
            // if (this.currentPage === this.totalPages) {
            //     return this.totalPages - this.maxVisibleButtons;
            // }
            if((this.totalPages-this.currentPage) < this.maxVisibleButtons){
                return this.totalPages < this.maxVisibleButtons ? 1 :
                    this.totalPages - this.maxVisibleButtons+1;
            }
            // When inbetween
            return this.currentPage - 1;
        },
        pages() {
            const range = [];

            for (
                let i = this.startPage;
                i <= Math.min(this.startPage + this.maxVisibleButtons -1 , this.totalPages);
                i++
            ) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }

            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickFirstPage() {
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
            this.currentPage===1?
            null:
            this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.currentPage==page?
            null:
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.currentPage==this.totalPages?
            null:
            this.$emit('pagechanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages);
        }
    }
};
</script>