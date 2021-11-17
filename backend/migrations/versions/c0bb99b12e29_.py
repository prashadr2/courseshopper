"""empty message

Revision ID: c0bb99b12e29
Revises: 66427294c06f
Create Date: 2021-11-03 19:25:16.244293

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'c0bb99b12e29'
down_revision = '66427294c06f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('review', sa.Column('teacher_rating', sa.Integer(), nullable=False))
    op.add_column('review', sa.Column('workload_rating', sa.Integer(), nullable=False))
    op.add_column('review', sa.Column('difficulty_rating', sa.Integer(), nullable=False))
    op.add_column('review', sa.Column('practicability_rating', sa.Integer(), nullable=False))
    op.drop_column('review', 'rating')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('review', sa.Column('rating', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=False))
    op.drop_column('review', 'practicability_rating')
    op.drop_column('review', 'difficulty_rating')
    op.drop_column('review', 'workload_rating')
    op.drop_column('review', 'teacher_rating')
    # ### end Alembic commands ###