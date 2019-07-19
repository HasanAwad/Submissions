<?php

use App\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [[
            'id'         => '1',
            'title'      => 'user_management_access',
            'created_at' => '2019-06-23 12:47:05',
            'updated_at' => '2019-06-23 12:47:05',
        ],
            [
                'id'         => '2',
                'title'      => 'permission_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '3',
                'title'      => 'permission_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '4',
                'title'      => 'permission_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '5',
                'title'      => 'permission_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '6',
                'title'      => 'permission_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '7',
                'title'      => 'role_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '8',
                'title'      => 'role_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '9',
                'title'      => 'role_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '10',
                'title'      => 'role_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '11',
                'title'      => 'role_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '12',
                'title'      => 'user_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '13',
                'title'      => 'user_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '14',
                'title'      => 'user_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '15',
                'title'      => 'user_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '16',
                'title'      => 'user_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '17',
                'title'      => 'order_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '18',
                'title'      => 'order_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '19',
                'title'      => 'order_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '20',
                'title'      => 'order_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '21',
                'title'      => 'order_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '22',
                'title'      => 'items_type_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '23',
                'title'      => 'items_type_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '24',
                'title'      => 'items_type_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '25',
                'title'      => 'items_type_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '26',
                'title'      => 'items_type_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '27',
                'title'      => 'order_item_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '28',
                'title'      => 'order_item_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '29',
                'title'      => 'order_item_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '30',
                'title'      => 'order_item_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '31',
                'title'      => 'order_item_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '32',
                'title'      => 'audit_log_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '33',
                'title'      => 'audit_log_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '34',
                'title'      => 'content_management_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '35',
                'title'      => 'content_category_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '36',
                'title'      => 'content_category_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '37',
                'title'      => 'content_category_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '38',
                'title'      => 'content_category_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '39',
                'title'      => 'content_category_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '40',
                'title'      => 'content_tag_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '41',
                'title'      => 'content_tag_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '42',
                'title'      => 'content_tag_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '43',
                'title'      => 'content_tag_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '44',
                'title'      => 'content_tag_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '45',
                'title'      => 'content_page_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '46',
                'title'      => 'content_page_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '47',
                'title'      => 'content_page_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '48',
                'title'      => 'content_page_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '49',
                'title'      => 'content_page_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '50',
                'title'      => 'contact_create',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '51',
                'title'      => 'contact_edit',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '52',
                'title'      => 'contact_show',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '53',
                'title'      => 'contact_delete',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ],
            [
                'id'         => '54',
                'title'      => 'contact_access',
                'created_at' => '2019-06-23 12:47:05',
                'updated_at' => '2019-06-23 12:47:05',
            ]];

        Permission::insert($permissions);
    }
}