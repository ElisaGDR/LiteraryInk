"""empty message

Revision ID: 8cc32425e1b6
Revises: 
Create Date: 2023-11-17 03:13:42.858535

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8cc32425e1b6'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category_services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('description', sa.String(length=1500), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=10), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('is_admin', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('advisors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('nif', sa.String(length=9), nullable=False),
    sa.Column('category', sa.Enum('Reviewer', 'Mentor', name='category'), nullable=False),
    sa.Column('address', sa.String(length=150), nullable=False),
    sa.Column('city', sa.String(length=120), nullable=False),
    sa.Column('country', sa.String(length=120), nullable=False),
    sa.Column('about_me', sa.String(length=1500), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('nif')
    )
    op.create_table('authors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('alias', sa.String(length=120), nullable=False),
    sa.Column('birth_date', sa.DateTime(), nullable=True),
    sa.Column('city', sa.String(length=120), nullable=True),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('quote', sa.String(length=120), nullable=True),
    sa.Column('about_me', sa.String(length=1500), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('alias')
    )
    op.create_table('followers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('follower_id', sa.Integer(), nullable=False),
    sa.Column('following_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['follower_id'], ['authors.id'], ),
    sa.ForeignKeyConstraint(['following_id'], ['authors.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('members',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.Column('nif', sa.String(length=9), nullable=False),
    sa.Column('address', sa.String(length=150), nullable=False),
    sa.Column('starting_date', sa.DateTime(), nullable=True),
    sa.Column('current_date', sa.DateTime(), nullable=True),
    sa.Column('final_date', sa.DateTime(), nullable=True),
    sa.Column('current_discount', sa.Integer(), nullable=True),
    sa.Column('remaining_reviews', sa.Integer(), nullable=True),
    sa.Column('reviews_expiring_date', sa.DateTime(), nullable=True),
    sa.Column('status', sa.Enum('Active', 'Inactive', 'Pending', name='status'), nullable=False),
    sa.Column('awards', sa.String(length=1000), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nif')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('abstract', sa.String(length=80), nullable=True),
    sa.Column('tag', sa.String(length=50), nullable=True),
    sa.Column('text', sa.String(length=50), nullable=False),
    sa.Column('created_date', sa.DateTime(), nullable=True),
    sa.Column('update_date', sa.DateTime(), nullable=True),
    sa.Column('is_published', sa.Boolean(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('starting_date', sa.DateTime(), nullable=True),
    sa.Column('final_date', sa.DateTime(), nullable=True),
    sa.Column('is_available', sa.Boolean(), nullable=False),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('stripe_price', sa.String(length=50), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('advisor_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['advisor_id'], ['advisors.id'], ),
    sa.ForeignKeyConstraint(['category_id'], ['category_services.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bills',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('paying_method', sa.String(length=100), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('status', sa.Enum('Paid', 'Declined', 'Pending', name='status'), nullable=False),
    sa.Column('member_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['member_id'], ['members.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('text', sa.String(length=255), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('value', sa.Integer(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('media',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('source', sa.String(length=100), nullable=False),
    sa.Column('url', sa.String(length=250), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url')
    )
    op.create_table('report_posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('status', sa.Enum('Resolved', 'Rejected', 'Pending', name='status'), nullable=False),
    sa.Column('log', sa.String(length=1500), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['authors.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_carts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('total_amount', sa.Float(), nullable=True),
    sa.Column('discount', sa.Float(), nullable=True),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('member_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['member_id'], ['members.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bill_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('stripe_price', sa.String(length=50), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=False),
    sa.Column('bill_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bill_id'], ['bills.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('billing_issues',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('status', sa.Enum('Resolved', 'Rejected', 'Pending', name='status'), nullable=False),
    sa.Column('log', sa.String(length=1500), nullable=True),
    sa.Column('bill_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bill_id'], ['bills.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('stripe_price', sa.String(length=50), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=False),
    sa.Column('shopping_cart_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.ForeignKeyConstraint(['shopping_cart_id'], ['shopping_carts.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('shopping_cart_items')
    op.drop_table('billing_issues')
    op.drop_table('bill_items')
    op.drop_table('shopping_carts')
    op.drop_table('report_posts')
    op.drop_table('media')
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('bills')
    op.drop_table('services')
    op.drop_table('posts')
    op.drop_table('members')
    op.drop_table('followers')
    op.drop_table('authors')
    op.drop_table('advisors')
    op.drop_table('users')
    op.drop_table('category_services')
    # ### end Alembic commands ###
