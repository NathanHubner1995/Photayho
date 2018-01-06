class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)

  if @item.save
    redirect_to items_path
  else
    render :new
  end
  end

  def edit

  end

  def update
    if @item.update(sub_params)
    redirect_to @sub
  else
    render :edit
  end
  end

  def destroy
    @item = Item.destroy
    redirect_to items_path
  end
end
