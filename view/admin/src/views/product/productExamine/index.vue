<template>
  <div class="divBox">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-tabs v-model="tableFrom.type" @tab-click="getList(1)">
          <el-tab-pane v-for="(item,index) in headeNum" :key="index" :name="item.type.toString()" :label="item.name +'('+item.count +')' " />
        </el-tabs>
        <div class="container">
          <div class="demo-input-suffix acea-row">
            <el-form inline size="small">
              <el-form-item label="商户分类：">
                <el-cascader
                  v-model="tableFrom.cate_id"
                  class="selWidth"
                  :options="merCateList"
                  :props="props"
                  clearable
                  @change="getList(1)"
                />
              </el-form-item>
              <el-form-item label="商户名称：">
                <el-select v-model="tableFrom.mer_id" clearable filterable placeholder="请选择" class="selWidth" @change="getList(1)">
                  <el-option
                    v-for="item in merSelect"
                    :key="item.mer_id"
                    :label="item.mer_name"
                    :value="item.mer_id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="商户类别：">
                <el-select
                  v-model="tableFrom.is_trader"
                  clearable
                  placeholder="请选择"
                  class="selWidth"
                  @change="getList(1)"
                >
                  <el-option label="自营" value="1" />
                  <el-option label="非自营" value="0" />
                </el-select>
              </el-form-item>
              <el-form-item label="商品搜索：">
                <el-input v-model="tableFrom.keyword" placeholder="请输入商品名称，关键字，产品编号" class="selWidth">
                  <el-button slot="append" icon="el-icon-search" @click="getList()" />
                </el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <el-button v-show="tableFrom.type === '6'" size="mini" @click="batch">批量审核</el-button>
        <el-button v-show="Number(tableFrom.type) < 3" size="mini" style="margin-left: 0px" @click="batchOff">批量强制下架</el-button>
      </div>
      <el-table
        v-loading="listLoading"
        :data="tableData.data"
        style="width: 100%"
        size="mini"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="Number(tableFrom.type)<7"
          key="2"
          type="selection"
          width="55"
        />
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="平台分类：">
                <span>{{ props.row.storeCategory?props.row.storeCategory.cate_name:'-' }}</span>
              </el-form-item>
              <el-form-item label="商品分类：">
                <template v-if="props.row.merCateId.length">
                  <span v-for="(item, index) in props.row.merCateId" :key="index" class="mr10">{{ item.category ? item.category.cate_name : '-' }}</span>
                </template>
                <span v-else>-</span>
              </el-form-item>
              <el-form-item label="品牌：">
                <span>{{ props.row.brand ? props.row.brand.brand_name: '-' }}</span>
              </el-form-item>
              <el-form-item label="市场价格：">
                <span>{{ props.row.ot_price | filterEmpty }}</span>
              </el-form-item>
              <el-form-item label="成本价：">
                <span>{{ props.row.cost | filterEmpty }}</span>
              </el-form-item>
              <el-form-item label="收藏：">
                <span>{{ props.row.care_count | filterEmpty }}</span>
              </el-form-item>
              <el-form-item label="虚拟销量：">
                <span>{{ props.row.ficti | filterEmpty }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="product_id"
          label="ID"
          min-width="50"
        />
        <el-table-column label="商品图" min-width="80">
          <template slot-scope="scope">
            <div class="demo-image__preview">
              <el-image
                style="width: 36px; height: 36px"
                :src="scope.row.image"
                :preview-src-list="[scope.row.image]"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="商品详情图" min-width="200"  v-if="Number(tableFrom.type) != 8">
          <template slot-scope="scope">
            <div class="demo-image__preview">
              <el-image
                v-for="(item, index) in scope.row.slider_image" :key="index"
                style="width: 36px; height: 36px"
                :src="item"
                :preview-src-list="item"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="新旧程度" min-width="80"  v-if="Number(tableFrom.type) != 8">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.new_percentage == 30" type="info">三成新</el-tag>
            <el-tag v-if="scope.row.new_percentage == 50" type="info">五成新</el-tag>
            <el-tag v-if="scope.row.new_percentage == 70" type="info">七成新</el-tag>
            <el-tag v-if="scope.row.new_percentage == 90" type="info">九成新</el-tag>
            <el-tag v-if="scope.row.new_percentage == 100" type="info">全新</el-tag>
          </template>
        </el-table-column>        
        <el-table-column
          prop="store_name"
          label="商品名称"
          min-width="200"
        />
        <el-table-column
          label="商户名称"
          min-width="150"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.merchant ? scope.row.merchant.mer_name : '' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="mer_name" label="商户类别" min-width="90"  v-if="Number(tableFrom.type) != 8">
          <template slot-scope="scope">
            <span v-if="scope.row.merchant" class="spBlock">{{ scope.row.merchant .is_trader ? '自营' : '非自营' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="商品售价"
          min-width="90"
        />
        <el-table-column
          v-if="Number(tableFrom.type) != 8"
          prop="sales"
          label="销量"
          min-width="90"
        />
        <el-table-column
          v-if="Number(tableFrom.type) != 8"
          prop="stock"
          label="库存"
          min-width="90"
        />
        <el-table-column
          v-if="Number(tableFrom.type) != 8"
          prop="sort"
          label="排序"
          min-width="70"
        />
        <el-table-column
          v-if="Number(tableFrom.type) == 8"
          prop="store_info"
          label="以旧换新商品描述"
          min-width="300"
        />
        
        <el-table-column
          v-if="Number(tableFrom.type)!= 8"
          prop="status"
          label="是否显示"
          min-width="100"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_used"
              :active-value="1"
              :inactive-value="0"
              active-text="显示"
              inactive-text="隐藏"
              @change="onchangeIsShow(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          min-width="150"
        />
        <el-table-column v-if="Number(tableFrom.type) < 7" key="8" label="操作" min-width="100" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button v-if="Number(tableFrom.type) < 7" type="text" size="small" @click="onEdit(scope.row.product_id)">编辑</el-button>
            <el-button v-if="tableFrom.type === '6' || tableFrom.type === '1'" type="text" size="small" @click="toVirtualSales(scope.row.product_id)">虚拟销量</el-button>
            <el-button v-if="tableFrom.type === '6'" type="text" size="small" @click="toExamine(scope.row.product_id)">审核</el-button>
            <el-button v-if="Number(tableFrom.type) < 3" type="text" size="small" @click="toOff([scope.row.product_id])">强制下架</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          :page-sizes="[20, 40, 60, 80]"
          :page-size="tableFrom.limit"
          :current-page="tableFrom.page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.total"
          @size-change="handleSizeChange"
          @current-change="pageChange"
        />
      </div>
    </el-card>
    <info-from ref="infoFrom" :is-show="isShow" :ids="OffId" @subSuccess="subSuccess" />
    <el-dialog
      title="商品编辑"
      :visible.sync="dialogVisible"
      width="1000px"
      :before-close="handleClose"
    >
      <el-form ref="formValidate" v-loading="fullscreenLoading" class="formValidate mt20" :rules="ruleValidate" :model="formValidate" label-width="100px" @submit.native.prevent>
        <el-form-item label="商品名称：" prop="store_name">
          <el-input v-model="formValidate.store_name" placeholder="请输入商品名称" />
        </el-form-item>
        <el-form-item label="商品推荐：">
          <el-checkbox-group v-model="checkboxGroup" size="small" @change="onChangeGroup">
            <el-checkbox v-for="(item, index) in recommend" :key="index" :label="item.value">{{ item.name }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!--<el-form-item label="虚拟销量：">
          <el-input-number v-model="formValidate.ficti" :min="0" label="虚拟销量" />
        </el-form-item>-->
        <el-col :span="24">
          <el-form-item label="商品详情：">
            <ueditor-from v-model="formValidate.content" :content="formValidate.content" />
          </el-form-item>
        </el-col>
        <el-form-item style="margin-top:30px;">
          <el-button type="primary" class="submission" size="small" @click="handleSubmit('formValidate')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  changeApi,
  productLstApi,
  productDetailApi,
  categoryListApi,
  productUpdateApi,
  lstFilterApi,
  merSelectApi,
  productOffApi,
  toVirtualSalesApi
} from '@/api/product';
import { roterPre } from '@/settings';
import infoFrom from './info';
import ueditorFrom from '@/components/ueditorFrom';
const proOptions = [
  { name: '热门榜单', value: 'is_hot' },
  { name: '促销单品', value: 'is_benefit' },
  { name: '精品推荐', value: 'is_best' },
  { name: '首发新品', value: 'is_new' }
];
export default {
  name: 'ProductExamine1',
  components: { infoFrom, ueditorFrom },
  data() {
    return {
      props: {
        emitPath: false
      },
      ruleValidate: {
        store_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      checkboxGroup: [],
      recommend: proOptions,
      formValidate: {
        is_hot: 0,
        is_best: 0,
        is_new: 0,
        is_benefit: 0,
        ficti: 0,
        content: '',
        store_name: ''
      },
      fullscreenLoading: false,
      isShow: false,
      roterPre: roterPre,
      listLoading: true,
      tableData: {
        data: [],
        total: 0
      },
      tableFrom: {
        page: 1,
        limit: 20,
        cate_id: '',
        store_name: '',
        type: '6',
        mer_id: '',
        keyword: '',
        is_trader: ''
      },
      categoryList: [],
      merCateList: [],
      multipleSelection: [],
      headeNum: [],
      merSelect: [],
      OffId: [],
      productId: 0
    };
  },
  mounted() {
    this.getMerSelect();
    this.getList();
    this.getCategorySelect();
    this.getLstFilterApi();
  },
  methods: {
    subSuccess() {
      this.getList();
      this.getLstFilterApi();
    },
    onchangeIsShow(row) {
      changeApi(row.product_id, row.is_used)
        .then(({ message }) => {
          this.$message.success(message);
          this.getList();
        })
        .catch(({ message }) => {
          this.$message.error(message);
        });
    },
    getInfo(id) {
      this.fullscreenLoading = true;
      this.checkboxGroup = [];
      productDetailApi(id)
        .then(res => {
          const info = res.data;
          this.formValidate = {
            is_hot: info.is_hot,
            is_best: info.is_best,
            is_new: info.is_new,
            is_benefit: info.is_benefit,
            ficti: info.ficti,
            content: info.content,
            store_name: info.store_name
          };
          if (info.is_benefit === 1) this.checkboxGroup.push('is_benefit');
          if (info.is_hot === 1) this.checkboxGroup.push('is_hot');
          if (info.is_best === 1) this.checkboxGroup.push('is_best');
          if (info.is_new === 1) this.checkboxGroup.push('is_new');
          this.fullscreenLoading = false;
          console.log(this.formValidate);
        })
        .catch(res => {
          this.$message.error(res.message);
          this.fullscreenLoading = false;
        });
    },
    onEdit(id) {
      this.productId = id;
      this.getInfo(id);
      this.dialogVisible = true;
    },
    // 编辑虚拟销量
    toVirtualSales(id) {
      this.$modalForm(toVirtualSalesApi(id)).then(() => this.getList(''));
    },
    // 提交
    handleSubmit(name) {
      console.log(this.formValidate);
      this.$refs[name].validate(valid => {
        if (valid) {
          productUpdateApi(this.productId, this.formValidate)
            .then(async res => {
              this.fullscreenLoading = false;
              this.$message.success(res.message);
              this.dialogVisible = false;
              this.getList();
            })
            .catch(res => {
              this.fullscreenLoading = false;
              this.$message.error(res.message);
            });
        } else {
          return false;
        }
      });
    },
    onChangeGroup() {
      this.checkboxGroup.includes('is_benefit')
        ? (this.formValidate.is_benefit = 1)
        : (this.formValidate.is_benefit =
            0 && this.checkboxGroup.remove('is_benefit'));
      this.checkboxGroup.includes('is_best')
        ? (this.formValidate.is_best = 1)
        : (this.formValidate.is_best =
            0 && this.checkboxGroup.remove('is_best'));
      this.checkboxGroup.includes('is_new')
        ? (this.formValidate.is_new = 1)
        : (this.formValidate.is_new = 0 && this.checkboxGroup.remove('is_new'));
      this.checkboxGroup.includes('is_hot')
        ? (this.formValidate.is_hot = 1)
        : (this.formValidate.is_hot = 0 && this.checkboxGroup.remove('is_hot'));
    },
    handleClose() {
      this.dialogVisible = false;
    },
    // 批量下架
    batchOff() {
      if (this.multipleSelection.length === 0)
        return this.$message.warning('请先选择商品');
      this.toOff(this.OffId);
    },
    // 下架
    toOff(id) {
      this.$prompt('强制下架', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '请输入强制下架原因',
        inputType: 'textarea',
        inputPlaceholder: '请输入强制下架原因',
        inputValidator: value => {
          if (!value) {
            return '请输入强制下架原因';
          }
        }
      })
        .then(({ value }) => {
          productOffApi({ id: id, status: -2, refusal: value })
            .then(res => {
              this.$message({
                type: 'success',
                message: '提交成功'
              });
              this.getLstFilterApi();
              this.getList();
            })
            .catch(res => {
              this.$message.error(res.message);
            });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
    },
    // 列表表头；
    getLstFilterApi() {
      lstFilterApi()
        .then(res => {
          this.headeNum = res.data;
        })
        .catch(res => {
          this.$message.error(res.message);
        });
    },
    // 商户列表；
    getMerSelect() {
      merSelectApi()
        .then(res => {
          this.merSelect = res.data;
        })
        .catch(res => {
          this.$message.error(res.message);
        });
    },
    batch() {
      if (this.multipleSelection.length === 0)
        return this.$message.warning('请先选择商品');
      this.$refs.infoFrom.dialogVisible = true;
      this.isShow = false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      const data = [];
      this.multipleSelection.map(item => {
        data.push(item.product_id);
      });
      this.OffId = data;
    },
    toExamine(id) {
      this.$refs.infoFrom.dialogVisible = true;
      this.isShow = true;
      this.$refs.infoFrom.getInfo(id);
    },
    // 商户分类；
    getCategorySelect() {
      categoryListApi()
        .then(res => {
          this.merCateList = res.data;
        })
        .catch(res => {
          this.$message.error(res.message);
        });
    },
    // 列表
    getList(num) {
      this.listLoading = true;
      this.tableFrom.page = num ? num : this.tableFrom.page;
      productLstApi(this.tableFrom)
        .then(res => {
          this.tableData.data = res.data.list;
          this.tableData.total = res.data.count;
          this.listLoading = false;
        })
        .catch(res => {
          this.listLoading = false;
          this.$message.error(res.message);
        });
    },
    pageChange(page) {
      this.tableFrom.page = page;
      this.getList();
    },
    handleSizeChange(val) {
      this.tableFrom.limit = val;
      this.getList();
    }
    // 删除
    // handleDelete(id, idx) {
    //   this.$modalSure().then(() => {
    //     productDeleteApi(id).then(({ message }) => {
    //       this.$message.success(message)
    //       this.getList()
    //     }).catch(({ message }) => {
    //       this.$message.error(message)
    //     })
    //   })
    // },
  }
};
</script>

<style scoped lang="scss">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand {
  /deep/ label {
    width: 77px;
    color: #99a9bf;
  }
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 33.33%;
}
.selWidth {
  width: 350px !important;
}
.seachTiele {
  line-height: 35px;
}
</style>
